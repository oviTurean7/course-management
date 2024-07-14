import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

let courses = [
    { id: 1, title: 'Course 1', description: 'Description of Course 1', duration: 5 },
    { id: 2, title: 'Course 2', description: 'Description of Course 2', duration: 3 },
    { id: 3, title: 'Course 3', description: 'Description of Course 3', duration: 4 }
];

app.post('/courses', (req: Request, res: Response) => {
    const newCourse = req.body;
    newCourse.id = courses.length + 1;
    courses.push(newCourse);
    res.status(201).send(newCourse);
});

app.get('/courses', (req: Request, res: Response) => {
    res.status(200).send(courses);
});

app.get('/courses/:id', (req: Request, res: Response) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send({ message: 'Course not found' });
    }
    res.status(200).send(course);
});

app.patch('/courses/:id', (req: Request, res: Response) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send({ message: 'Course not found' });
    }
    Object.assign(course, req.body);
    res.status(200).send(course);
});

app.delete('/courses/:id', (req: Request, res: Response) => {
    courses = courses.filter(c => c.id !== parseInt(req.params.id));
    res.status(200).send({ message: 'Course deleted' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
