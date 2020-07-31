
from flask import Flask

app = Flask(__name__)
app.secret_key = "3n13m3@n13myn13m0-sudoku-duel"


app.config["STATIC_FILE_VERSION"] = "0.0.01"  # increase when there's new CSS / JS


def import_js(file_name, override_directory="js", asynchronous=False):
    asynchronous = " async" if asynchronous else ""
    return """<script{} type="text/javascript" src="/static/{}/{}.js?version={}"></script>""".format(
        asynchronous, override_directory, file_name, app.config["STATIC_FILE_VERSION"]
    )


def import_css(file_name, override_directory="css"):
    return """<link rel="stylesheet" type="text/css" href="/static/{}/{}.css?version={}">""".format(
        override_directory, file_name, app.config["STATIC_FILE_VERSION"]
    )


app.jinja_env.globals.update(import_js=import_js, import_css=import_css)


@app.route("/ping", methods=["GET"])
def ping():
    return "okay", 200


def load_app() -> Flask:
    return app


if __name__ == "__main__":
    load_app().run(debug=True, host="0.0.0.0", port=8080)
