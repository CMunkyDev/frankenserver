function indexFileTemplate (resourceArr, indexType) {
    let indexText = `module.exports = {\n`
    resourceArr.forEach(resource => {
        indexText += `  ${resource.name}${indexType}: require('./${resource.name}.js'),\n`
    })
    indexText += `}`
    return indexText
}

module.exports = indexFileTemplate