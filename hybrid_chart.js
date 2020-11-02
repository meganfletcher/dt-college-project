// DATA
var hybrid_data = [
    {college: "Architecture", value: 55.59, rank: 1},
    {college: "Education", value: 45.90, rank: 2},
    {college: "Pharmacy", value: 44.08, rank: 3},
    {college: "McCombs", value: 40.11, rank: 4},
    {college: "Nursing", value: 35.78, rank: 5},
    {college: "Natural Sciences", value: 29.25, rank: 6},
    {college: "Law", value: 27.43, rank: 7},
    {college: "Geosciences", value: 24.70, rank: 8},
    {college: "Cockrell", value: 23.82, rank: 9},
    {college: "Fine Arts", value: 19.74, rank: 10},
    {college: "Moody", value: 19.36, rank: 11},
    {college: "Social Work", value: 18.27, rank: 12},
    {college: "Liberal Arts", value: 14.34, rank: 13},
    {college: "LBJ", value: 14.04, rank: 14},
    {college: "Undergraduate Studies", value: 8.15, rank: 15}
    ];

    // D3
    // create svg, give height and width, set margin
    var svg2 = d3.select("body")
        .append("svg")
        .attr("height", 500)
        .attr("width", 800)
        .attr("id", "HYB_chart")
        .attr("class", "dNone");

    const margin2 = {top:20, right:20, bottom:20, left:120};

    const width2 = +svg2
        .attr("width") - margin2.left - margin2.right;

    const height2 = +svg2
        .attr("height") - margin2.top - margin2.bottom;

    // create scales
    const xScale2 = d3.scaleLinear()
        .domain([0, d3.max(hybrid_data, (function(d){return d.value}))])
        .range([0, width2]);
    
    const yScale2 = d3.scaleBand()
        .domain(hybrid_data.map(function(d){return d.college}))
        .range([0, height2])
        .padding(0.15);

    const rectGrp2 = svg2
        .append('g')
        .attr('transform', 'translate('+margin2.left+','+margin2.top+')');
    
    // y and x axis
    rectGrp2.append('g').call(d3.axisLeft(yScale2));
    rectGrp2.append('g').call(d3.axisBottom(xScale2).tickFormat(d => d + "%"))
        .attr('transform', 'translate(0,'+height2+')');

    rectGrp2.selectAll('rect').data(hybrid_data)
        .enter()
        .append('rect')
        .attr('y', d => yScale2(d.college))
        .attr('width', d => xScale2(d.value))
        .attr('height', yScale2.bandwidth())
        .attr("fill", "#0066539f");