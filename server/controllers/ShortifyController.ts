import ShortifyService, { ShortifyNotFound } from "../services/ShortifyService";
import { Request, Response } from 'express';

export default class ShortifyController {
    static async redirectToFull(req: Request, res: Response) {
        try {
            const url = await ShortifyService.getUrlForToken(req.params.token);
            res.redirect(`//${url}`);
        } catch (e) {
            if (e instanceof ShortifyNotFound) {
                res.status(404).send();
            }
        }
    }

    static async createShortify(req: Request, res: Response) {
        const token = await ShortifyService.createShortify(req.body.url);
        const url = `${req.headers.host}/${token}`;

        res.status(201).json({url});
    }
}