var sanitizer = require('sanitizer');


const validaOpenai = async (expresion)=>{
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    pregunta = `contiene lenguaje 
     javascript en la siguiente expresion?
    "${expresion}". Responde true o false en minusculas`
    console.log(pregunta);
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: pregunta
      });
      console.log(completion.data.choices[0].text);
      return completion.data.choices[0].text.trim();
}

const validaInput = (expresion) =>{
    const validadores = ["<script>"]
    for(var i = 0 ; i< validadores.length;++i){
       if(expresion.includes(validadores[i])){
            return "true"
        }
    }
    return "false"

}
const validaSanitizer = (expresion) => {
    expresion = sanitizer.escape(expresion); 
    // expresion = sanitizer.normalizeRCData(expresion); 
    // expresion = sanitizer.sanitize(expresion); 
    // expresion = sanitizer.unescapeEntities(expresion); //no sirve
    console.log(expresion)
    return(expresion)
}

module.exports ={
    validaOpenai,
    validaInput,
    validaSanitizer,
}