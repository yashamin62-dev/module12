function getPage(version, featureEnabled) {
    return `
<!DOCTYPE html>
<html>
<head>
    <title>DevOps Demo</title>
    <style>
        body {
            font-family: Arial;
            text-align: center;
            margin-top: 100px;
        }

        h1 {
            font-size: 40px;
        }

        .box {
            display: inline-block;
            padding: 30px;
            border: 2px solid #333;
            border-radius: 10px;
        }
    </style>
</head>

<body>

<div class="box">

    <h1>DevOps Demo Application</h1>

    <h2>Version: ${version}</h2>

    <h2>New Feature: ${featureEnabled ? "ON" : "OFF"}</h2>

</div>

</body>
</html>
`;
}

module.exports = { getPage };
