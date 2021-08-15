class Formatter {
  static capitalize(string){
    return string[0].toUpperCase()+string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^a-zA-Z0-9 '-]/g, '')
    
  }
  static titleize(string){
    lowercase = ["the","a","an","but","of","and","for","at","by","from"]
    newString = []
    splitString = string.split(" ")
  //need to loop through the splitString and identify any words that are direct matches to the array (do I loop through that too?) then return the array or something. I don't know. I'm tired.
    
    return newString.toUpperCase()
  }
}