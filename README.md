# BangleDates
An Bangle.js app to show Dates

## Converting Dates

To show dates in the watch, data from an .ics format file must be converted to json data. This can be done by using the jupyter notebook **ics2json_converter.ipynb**.

> The script only looks for *VEVENT* elements which are converted into json: 

```json
[
    {
        "Event": "Imagine Dragons",
        "Date": "2022-06-14",
        "AllDay": 0
    },
    {
        "Event": "Call Mum",
        "Date": "2022-06-21,
        "AllDay": 0
    },
    
    ....
]
```


## Showing Dates on Watch

All found dates from **today + 10 days** are listed when starting the app. The current date is shown on top.

Events which have a RRULE set to FREQ=YEARLY and have a startdate long ago are shown for the current year.
