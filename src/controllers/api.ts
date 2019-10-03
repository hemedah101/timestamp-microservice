import { Response, Request } from 'express';

const getTimestamp = (date: any) => ({
    unix: date.getTime(),
    utc: date.toUTCString()
});

export const timestampRoute = (req: Request, res: Response) => {
    const dateParam: any = req.params.date;
    let timestamp;

    if (dateParam != undefined || dateParam != '') {
        const date = !isNaN(dateParam)
            ? new Date(parseInt(dateParam))
            : new Date(dateParam);

        if (!isNaN(date.getTime())) {
            timestamp = getTimestamp(date);
        } else {
            timestamp = {
                error: 'invalid date'
            };
        }
        res.json(timestamp);
    }
};

export const defaultTimestamp = (req: Request, res: Response) => {
    res.json(getTimestamp(new Date()));
};
