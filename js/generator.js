

// 
var firstName = ["adriano", "beatriz", "caio", "daniel", "eduarda", "felipe", "gabriela", "henrique", "laura"]
var lastname = ["cunha", "souza", "martins", "oliveira", "costa", "rocha", "cardoso", "santos","gonçalves"]

for (i=0; i<firstName.length; i++){
    console.log(firstName[i]+"."+lastname[i]+"@pecaai.com.br")
}

// Add breathing space between results
const line = '-'.repeat(process.stdout.columns)
console.log(line)

// Lower case names
for (i=0; i<firstName.length; i++){
    console.log(firstName[i], lastname[i])
}