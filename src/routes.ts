import express, { Express, Request, Response } from 'express';

const routes: Express = express();

// Retrieve information about the REST API resource
routes.get('/', (req: Request, res: Response) => {
    res.send('GET Express + TypeScript Server is running');
});

// Create a REST API resource
routes.post('/', (req: Request, res: Response) => {
    res.send('POST Express + TypeScript Server is running');
});

// PATCH is used to apply partial updates to a resource, meaning that only the fields that need to be changed are sent in the request body. 
routes.patch('/', (req: Request, res: Response) => {
    res.send('PATCH Express + TypeScript Server is running');
});

// PUT is used to replace the entire resource with a new representation, meaning that all the fields of the resource are sent in the request body, even if they are not modified.
routes.put('/', (req: Request, res: Response) => {
    res.send('PUT Express + TypeScript Server is running');
});

// Delete a REST API resource or related component
routes.delete('/', (req: Request, res: Response) => {
    res.send('DELETE Express + TypeScript Server is running');
});

export default routes;