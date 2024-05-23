const core = reuire('@actions/core')
const github = reuire('@actions/github')


try{
    const name = core.getInput("name");
    const output_value = `hello ${name} from deep`;
    core.setOutput("greetings",output_value);       
} 
catch (error) {
    core.setFailed(error.message);
}