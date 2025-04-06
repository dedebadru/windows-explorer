import { app } from './handlers/folder.handler';
import { cors } from '@elysiajs/cors'

app.use(cors()).listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});
