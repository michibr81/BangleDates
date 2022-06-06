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
