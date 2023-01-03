const table = {
    "Length" : {
        "Kilometer": 0.001,
        "Meter": 1,
        "Millimeter": 1000,
        "Inch": 39.3700787,
        "Yard": 1,
        "conversion" : {
            "input" : 1,
            "output" : 1,
            "alternating" : true
        }
    },
    "Temperature" : {
        "F": {
            "sub":32,
            "div":9
        },
        "C": {
            "sub":0,
            "div":5
        },
        "K": {
            "sub":273.15,
            "div":5
        },
        "conversion" : {
            "input" : 1,
            "output" : 1,
            "alternating" : true
        }
    },
    "Tipping" : {
        "Simple Math" : "Needs Custom layout",
        "conversion" : {
            "input" : 2,
            "output" : 1,
            "alternating" : false
        }
    },
    "HTML Measurements" : {
        "px" : 1,
        "rem" : 1,
        "vw" : 1,
        "conversion" : {
            "input" : 2,
            "output" : 1,
            "alternating" : false
        }
    }
}

export default table;
