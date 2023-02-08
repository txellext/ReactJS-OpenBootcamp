// Define data in a task

import { LEVELS } from "./levels.enum";




export class Task {
    name = '';
    description = '';
    completed = false;
    level = LEVELS.NORMAL; // Defined them in levels.enum.js

    constructor(name, description, completed, level){
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level
    }
}