var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "REBUILT",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Width",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain Motor",
      "code": "mot",
      "type": "radio",
      "choices": {
        "n": "Neo<br>",
        "f": "Falcon<br>",
        "c": "CIM<br>",
        "x": "Other<br>"
      },
      "defaultValue":"x"
    },
    { "name": "# of Batteries",
      "code": "nob",
      "type": "number"
    },
    { "name": "Autos",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
        { "name": "Theoretical climb",
      "code": "tcl",
      "type": "radio",
      "choices": {
        "1": "Level one<br>",
        "2": "Level two<br>",
        "3": "Level three<br>"
    },
      "defaultValue": "1"
    },
    { "name": "Planned Shooting Locations",
      "code": "psl",
      "type": "clickable_image",
      "filename": "2026/half_field.png",
      "dimensions": "7 10",
      "allowableResponses": "1 2 3 4 8 9 10 11 15 16 17 18 22 23 24 25 29 30 31 32 36 37 38 39 43 44 45 46 50 51 52 53 57 58 59 60 64 65 66 67",
      "expectedMax": 25,
      "shape": "circle 5 black red true"
    },
    { "name": "Estimated balls per second",
      "code": "ebps",
      "type": "number",
      "defaultValue": "1"
    },
    { "name": "Theoretical hopper size",
      "code": "ths",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Auton adaptability score (1-10)",
      "code": "aas",
      "type": "number",
      "min": 1,
      "max": 10,
      "defaultValue": "1"
    },
    { "name": "Scouting Method /<br>Program (ScoutingPASS?)",
      "code": "sct",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
