//THen import schema from any plugins that might expose them
import { SchemaTypes } from "aal:part:@sanity/base/schema-type";
import post from './post';
import comment from './comment';
import user from './user';
import postedBy from './postedBy';
//THen we give our schema to the builder and provide the result to sanity
export default createSchema = ({
  //We name our schema
  name: 'default',
  // Then proceed to concatenate our document 
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Your types are
    post,
    user,
    comment,
    postedBy
  ]),
})
