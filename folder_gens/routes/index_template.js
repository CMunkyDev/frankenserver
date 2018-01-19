function routeIndexFileTemplate (resourceArr) {
    let routeText = `module.exports = {\n`
    resourceArr.forEach(resource => {
        routeText += `  ${resource.name}Router: require('./${resource.name}.js'),\n`
    })
    routeText += `}`
    return routeText
}

module.exports = routeIndexFileTemplate