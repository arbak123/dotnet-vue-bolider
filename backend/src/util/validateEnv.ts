import { cleanEnv } from "envalid";
import { port, str } from "envalid/dist/validators";

//To add new environment variables to the envalid env object,add them here 
export default cleanEnv(process.env, {
    MONGO_URI: str(),
    PORT: port(),
    SESSION_SECRET: str(),
    HOST_URL: str()
});