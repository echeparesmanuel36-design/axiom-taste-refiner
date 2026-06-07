/**
 * Axiom Taste Refiner - Core Style Matrices
 */
const TASTE_MATRICES = {
    premium: {
        prefix: "Actúa como un estratega de alta costura, director creativo de marcas de lujo tipo Louis Vuitton o Apple.",
        suffix: "Evita explicaciones obvias, listas genéricas y muletillas de IA. Usa una estructura minimalista, directa, con impacto visual y un tono corporativo de élite."
    },
    cyberpunk: {
        prefix: "Adopta la personalidad de un ingeniero de sistemas clandestino en un entorno industrial hiper-tecnológico.",
        suffix: "Introduce terminología técnica cruda, estética de consola y un tono frío, analítico y directo al grano, sin rodeos corporativos tradicionales."
    },
    hacker: {
        prefix: "Actúa como un auditor senior de seguridad ofensiva enfocado en la máxima eficiencia de ejecución.",
        suffix: "Devuelve la información estructurada como un reporte táctico o bloques legibles de código. Cero introducciones vacías, ve directo al núcleo del problema."
    }
};

/**
 * Refines a raw prompt injecting custom personality layers
 * @param {string} rawPrompt - El prompt base del usuario
 * @param {string} style - El estilo seleccionado (premium, cyberpunk, hacker)
 * @returns {string} Prompt optimizado listo para copiar
 */
export function refinePrompt(rawPrompt, style = 'premium') {
    const matrix = TASTE_MATRICES[style] || TASTE_MATRICES.premium;
    return `${matrix.prefix}\n\n[INSTRUCCIÓN CENTRAL]:\n"${rawPrompt}"\n\n[REGLAS DE OUTPUT]:\n${matrix.suffix}`;
}
