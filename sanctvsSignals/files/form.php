<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>operadorSinais</title>
</head>
<body>
    <form method="POST" action="operador.php">
    <label for="date">DATA:</label>
    <input type="date" id="date" name="date"><br><br>

    <label for="M1">M1</label>
    <select name="M1" id="M1">
        <option value="false" selected>false</option>
        <option value="true" >True</option>
    </select>

    <label for="M1-2">M1-2</label>
    <select name="M1-2" id="M1-2">
        <option value="false" selected>false</option>
        <option value="true" >True</option>
    </select>
    <br><br>

    <label for="M5">M5</label>
    <select name="M5" id="M5">
        <option value="false" selected>false</option>
        <option value="true" >True</option>
    </select>

    <label for="M5-2">M5-2</label>
    <select name="M5-2" id="M5-2">
        <option value="false" selected>false</option>
        <option value="true" >True</option>
    </select>

    <br><br>

    <label for="M15">M15</label>
    <select name="M15" id="M15">
        <option value="false" selected>false</option>
        <option value="true" >True</option>
    </select>

    <label for="M15-2">M15-2</label>
    <select name="M15-2" id="M15-2">
        <option value="false" selected>false</option>
        <option value="true" >True</option>
    </select>

    <br><br>

    <label for="M30">M30</label>
    <select name="M30" id="M30">
        <option value="false" selected>false</option>
        <option value="true" >True</option>
    </select>

    <label for="M30-2">M15-2</label>
    <select name="M30-2" id="M30-2">
        <option value="false" selected>false</option>
        <option value="true" >True</option>
    </select>




    <br> <br>
    <input type="submit" value="Enviar">
    </form>
</body>
</html>