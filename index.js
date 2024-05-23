import * as core  from 'actions/core'


try{
    const name = core.getInput("name");
    const output_value = `hello ${name} from deep`;
    core.setOutput("greetings",output_value);       
} 
catch (error) {
    core.setFailed(error.message);
}