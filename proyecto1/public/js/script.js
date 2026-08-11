// --- 1. LÓGICA DEL PRELOADER (INDEPENDIENTE) ---
function initPreloader() {
    const preloader = document.getElementById('preloader');
    
    if (preloader) {
        // Si la página tiene preloader, espera 3.5 segundos y lo oculta
        setTimeout(() => {
            preloader.classList.add('fade-out');
            document.body.classList.add('loaded');
        }, 3500);
    } else {
        // Si no tiene preloader muestra el contenido inmediatamente
        document.body.classList.add('loaded');
    }
}

// Se ejecuta apenas el HTML esté listo sin esperar imágenes pesadas
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPreloader);
} else {
    initPreloader();
}


// --- 2. LÓGICA DE WEBGL2 / SHADER (INDEPENDIENTE) ---
window.addEventListener('load', () => {
    const canvas = document.getElementById('liquid-canvas');
    if (!canvas) return; // Si la vista no tiene canvas, no ejecuta WebGL pero tampoco da error

    const gl = canvas.getContext('webgl2');
    if (!gl) {
        console.error('WebGL 2 no está disponible en este navegador.');
        return;
    }

    let mouseX = 0, mouseY = 0;
    let targetMouseX = 0, targetMouseY = 0;

    window.addEventListener('mousemove', (e) => {
        targetMouseX = e.clientX / window.innerWidth;
        targetMouseY = 1.0 - (e.clientY / window.innerHeight);
    });

    const vsSource = `#version 300 es
        in vec2 position;
        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `;

    const fsSource = `#version 300 es
        precision highp float;
        out vec4 fragColor;
        
        uniform vec2 iResolution;
        uniform float iTime;
        uniform vec2 iMouse;

        #define time iTime

        const float arrow_density = 4.5;
        const float arrow_length = .45;
        const int iterationTime1 = 20;
        const int iterationTime2 = 20;
        const float scale = 5.0;

        const float velocity_x = 0.03; 
        const float velocity_y = 0.04;

        const float mode_2_speed = 1.2;
        const float mode_1_detail = 200.;
        const float mode_1_twist = 30.;

        float f(in vec2 p) {
            vec2 m = iMouse / iResolution.xy - 0.5;
            m.x *= iResolution.x / iResolution.y;
            m *= scale;

            float dist = distance(p, m);
            float wave = sin(dist * 1.5 - time * 1.0) * exp(-dist * 0.6);

            return sin(p.x + sin(p.y + time * velocity_x) + wave * 0.4) * sin(p.y * p.x * 0.1 + time * velocity_y - wave * 0.2);
        }

        struct Field {
            vec2 vel;
            vec2 pos;
        };

        Field field(in vec2 p, in int mode) {
            Field fieldRes;
            if(mode == 0){
                vec2 ep = vec2(0.05,0.);
                vec2 rz = vec2(0);
                for( int i=0; i<iterationTime1; i++ ) {
                    float t0 = f(p);
                    float t1 = f(p + ep.xy);
                    float t2 = f(p + ep.yx);
                    vec2 g = vec2((t1-t0), (t2-t0))/ep.xx;
                    vec2 t = vec2(-g.y,g.x);
                    p += (mode_1_twist*0.01)*t + g*(1./mode_1_detail);
                    p.x = p.x + sin(time*mode_2_speed/10.)/10.;
                    p.y = p.y + cos(time*mode_2_speed/10.)/10.;
                    rz = g; 
                }
                fieldRes.vel = rz;
                return fieldRes;
            }
            
            if(mode == 1){
                vec2 ep = vec2(0.05,0.);
                vec2 rz = vec2(0);
                for( int i=0; i<iterationTime1; i++ ) {
                    float t0 = f(p);
                    float t1 = f(p + ep.xy);
                    float t2 = f(p + ep.yx);
                    vec2 g = vec2((t1-t0), (t2-t0))/ep.xx;
                    vec2 t = vec2(-g.y,g.x);
                    p += (mode_1_twist*0.01)*t + g*(1./mode_1_detail);
                    p.x = p.x + sin(time*mode_2_speed/10.)/10.;
                    p.y = p.y + cos(time*mode_2_speed/10.)/10.;
                    rz = g;
                }
                fieldRes.vel = rz;
                for(int i=1; i<iterationTime2; i++){
                    p.x += 0.3/float(i)*sin(float(i)*3.*p.y+time*mode_2_speed) + 0.5;
                    p.y += 0.3/float(i)*cos(float(i)*3.*p.x + time*mode_2_speed) + 0.5;
                }
                fieldRes.pos = p;
                return fieldRes;
            }
            return fieldRes;
        }

        vec3 getRGB(in Field fld, in int mode){
            if(mode == 0){
                vec2 p = fld.vel;
                float baseNoise = length(p);
                
                vec3 colorRosa = vec3(1.0, 0.3, 0.5);
                vec3 colorNaranja = vec3(1.0, 0.6, 0.2);
                vec3 colorFucsia = vec3(0.9, 0.1, 0.6);
                
                float interpolador = sin(p.x * 2.0 + time * 0.1) * 0.5 + 0.5;
                vec3 mezclaBase = mix(colorRosa, colorNaranja, interpolador);
                
                vec3 finalCol = mix(mezclaBase, colorFucsia, sin(p.y * 2.0) * 0.3 + 0.3);
                
                return finalCol * (0.75 + baseNoise * 0.35);
            }
            if(mode == 1){
                vec2 p = fld.pos;
                float r = sin(p.x + 1.0) * 0.4 + 0.6;
                float g = cos(p.y) * 0.25 + 0.45;
                float b = sin(p.x - p.y) * 0.2 + 0.4;
                return vec3(r, g, b);
            }
            return vec3(0.0);
        }

        void main() {
            vec2 fragCoord = gl_FragCoord.xy;
            vec2 p = fragCoord.xy / iResolution.xy - 0.5;
            p.x *= iResolution.x / iResolution.y;
            p *= scale;
            
            int vector_mode = 0; 
            Field fld = field(p, vector_mode);
            vec3 col = getRGB(fld, vector_mode);    
            
            vec2 uv = fragCoord.xy / iResolution.xy;
            col *= 0.5 + 0.5 * pow(16.0 * uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y), 0.25);
            
            fragColor = vec4(col, 1.0);
        }
    `;

    function createShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Error compilando shader:', gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Error enlazando WebGL:', gl.getProgramInfoLog(program));
        return;
    }

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        -1, -1,   1, -1,  -1,  1,
        -1,  1,   1, -1,   1,  1,
    ]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'position');
    const resolutionLocation = gl.getUniformLocation(program, 'iResolution');
    const timeLocation = gl.getUniformLocation(program, 'iTime');
    const mouseLocation = gl.getUniformLocation(program, 'iMouse');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function render(time) {
        time *= 0.001;

        mouseX += (targetMouseX - mouseX) * 0.04;
        mouseY += (targetMouseY - mouseY) * 0.04;

        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.useProgram(program);

        gl.enableVertexAttribArray(positionLocation);
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height);
        gl.uniform1f(timeLocation, time);
        gl.uniform2f(mouseLocation, mouseX * gl.canvas.width, mouseY * gl.canvas.height);

        gl.drawArrays(gl.TRIANGLES, 0, 6);

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
});