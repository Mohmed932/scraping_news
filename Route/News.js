import {Router} from 'express'
import { newsController } from '../Controler/News.js';

export const newsRoute = Router();

newsRoute.route('/homepage').get(newsController);