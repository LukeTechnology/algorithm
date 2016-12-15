var tokens = {
  // js           // native
  "=":          "==",
  "<>":         "=!",
  "<=":         "<=",
  ">=":         ">=",
  "<":          "<",
  ">":          ">"
}

function write(output) {
  return output;
}

function read(input) {

}

//read().prototype.container(input) {
//  var input = document.querySelector("#" + input);
//}

class Algorithm {
  constructor() {
    this.js = "";
  }
  // transform to javascript
  to_js() {
    // get container result in a var
    this.code = document.getElementById("code");
    // get container of box executor
    this.console = document.getElementById("console");

    // add this value in the log
    //result.innerHTML += execute.value + '<div class="lines"><div class="CodeMirror-linenumber CodeMirror-gutter-elt arrow">&gt;</div> <div class="margin-line"> algorithm run unname.js</div></div>'
    // and execute a interpreter
    this.scanner();
    // to finish to clean execute box
    //execute.value = "";
  }
  // transform between native languaje and javascipt
  scanner() {
    // each line is separated into a array
    var line = this.code.value.split("\n");
    for (i in line){
      // each word is separated into a array
      var word = line[i].split(" ");
      console.log(word);
      // this loop is to search in various dictionaries, and transform that code
      for (var i in word) {
        // dictionaries of words
        if (transpiler[word[i]])
          this.js += transpiler[word[i]] + " ";
        // dictionaries of tokens
        else if (tokens[word[i]])
          this.js += tokens[word[i]] + " ";
        // and words not in the dictionary
        else
          this.js += word[i] + " ";
      }
      if (word[word.length-1].search("{") != -1 || word[word.length-1].search("}") != -1) {
        this.js += "\n";
        console.log("a");
      }
      else if (word[0].search("mostrar") != -1 || word[0].search("imprimir") != -1) {
        this.js = this.js.replace("mostrar", "write(");
        this.js = this.js.replace("imprimir", "write(");
        this.js += ");\n";
        console.log("b");
      }
      else {
        this.js += ";\n";
        console.log("c");
      }
    }
    console.log(this.js);
  }
}

// instance of mechanic
var algorithm = new Algorithm;