<!DOCTYPE html>
<html>
<head>
    <title>Theme Switcher</title>

    <style>
        body {
            background-color: white;
            color: black;
            text-align: center;
            font-family: Arial, sans-serif;
            padding: 50px;
        }

        .dark-mode {
            background-color: black;
            color: white;
        }

        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>

<body>

    <h1>Dynamic Theme Switcher</h1>
    <p>Click the button to switch between Dark and Light mode.</p>

    <button onclick="toggleTheme()">Dark Mode</button>

    <script>
        function toggleTheme() {
            document.body.classList.toggle("dark-mode");

            let button = document.querySelector("button");

            if (document.body.classList.contains("dark-mode")) {
                button.textContent = "Light Mode";
            } else {
                button.textContent = "Dark Mode";
            }
        }
    </script>

</body>
</html>