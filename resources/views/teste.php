<?php
/**
 * Created by PhpStorm.
 * User: rothink
 * Date: 27/09/17
 * Time: 01:04
 */
?>

<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
<form id="form">
    <input type="text" name="name" value="Rodrigu's bar">
    <input type="text" name="description" value="Melhor catuaba da região">
    <input type="file" name="photo" id="file">
</form>

<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script type="text/javascript">
    $('#file').on('change', function () {
        let formData = new FormData();
        formData.append('name', 'Erik\'s bar');
        formData.append('description', 'Melhor catuaba da região');
        formData.append('photo', $('#file')[0].files[0]);
        let headers = {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY4ZGM3MWI2NjZmYTJkZjc0MDUyMWI5ODcwZjRhMzlkMzdiNWM5ZGRjNDJkZmI2OGQ5Y2Y4ZjhhZGZmZjA4ZmZlODg3MDYxMWEyMzA4MTY0In0.eyJhdWQiOiIzIiwianRpIjoiNjhkYzcxYjY2NmZhMmRmNzQwNTIxYjk4NzBmNGEzOWQzN2I1YzlkZGM0MmRmYjY4ZDljZjhmOGFkZmZmMDhmZmU4ODcwNjExYTIzMDgxNjQiLCJpYXQiOjE1MDY0ODQ5MjgsIm5iZiI6MTUwNjQ4NDkyOCwiZXhwIjoxNTM4MDIwOTI4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.W1RRkgtrbyh6mkbdkuC97uXRhvHOCwtrQAY7fqTlEdwFHD42NdYYQsQhSGfF4GbT4uGQ9-y3EqAWS-d7gywYIrzCc962uM2Ib8O9e_Xlr2xieMClsi23m1aI2Efxhv3v0lFfn97SaPYlXwMwMKJWUYQOSEWCoDRrtb2gWobOwrFJFvjDOqtOWhK0TL7NltEr6u5QMwdKfNPEC_xUnKAJmE7bPvbkd1LwIPEojggkZE66o5TejYfo7IwTtKl6cmCCSajQA69yyZI12piWfPt_Lov_LqV1rSY77cLOXb-XwAUcHYTNCGwKh47s9-rCF8Xyxhs8BesvHXwwhtiAytDCIq8J_7UY6-I83_GbmTHuIZ3it5WQH5BOXEhpi5tsnc80W06IMfZdVzB9p7X1S7yx7rPwanU-u3cdvhDChXxie6vTzQmnBX6ZpU6jgDuzibWuIEgsVAJMiu-gV27TNqiFTUyOSfzJLfujOMWoVfiaIAoNw_PjGfEgSaXVhLh9rSXls6lM9T3hCyxegTID_EIOMVHwnOc_fbqkQi3b5kAJwVC_xL5oXAcw8zUh1elQ64rSfNqPGuVVBjMlnXAWg7mM6PGUHM3gGtiUObP0WJyNNetFwZcRA4egg86WkARUegu7LJHyqttoPNElQ9eCRNDBC6YQLOETEwJ0y0ISMZN9gvI',
            //'content-type': 'multipart/form-data'
            'content-type': 'application/x-www-form-urlencoded'
        }
        axios.put('http://localhost:8000/api/v1/restaurants/1', formData, {headers: headers})
    })
</script>
</body>
</html>