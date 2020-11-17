// DATA
var online_data = [
    {college: "Undergraduate Studies", value: 84.55, rank: 1},
    {college: "Social Work", value: 77.88, rank: 2},
    {college: "Liberal Arts", value: 70.11, rank: 3},
    {college: "Moody", value: 66.33, rank: 4},
    {college: "LBJ", value: 65.79, rank: 5},
    {college: "Law", value: 63.29, rank: 6},
    {college: "Fine Arts", value: 60.32, rank: 7},
    {college: "Cockrell", value: 58.35, rank: 8},
    {college: "Natural Sciences", value: 58.13, rank: 9},
    {college: "McCombs", value: 49.39, rank: 10},
    {college: "Architecture", value: 43.77, rank: 11},
    {college: "Geosciences", value: 40.36, rank: 12},
    {college: "Education", value: 28.33, rank: 13},
    {college: "Nursing", value: 13.76, rank: 14},
    {college: "Pharmacy", value: 7.76, rank: 15}
    ];

    // D3
    // create svg, give height and width, set margin
    var svg3 = d3.select("body")
        .append("svg")
        .attr("height", 500)
        .attr("width", 800)
        .attr("id", "ONL_chart")
        .attr("class", "dNone");

    const margin3 = {top:20, right:20, bottom:20, left:120};

    const width3 = +svg3
        .attr("width") - margin3.left - margin3.right;

    const height3 = +svg3
        .attr("height") - margin3.top - margin3.bottom;

    // create scales
    const xScale3 = d3.scaleLinear()
        .domain([0, d3.max(online_data, (function(d){return d.value}))])
        .range([0, width3]);
    
    const yScale3 = d3.scaleBand()
        .domain(online_data.map(function(d){return d.college}))
        .range([0, height3])
        .padding(0.15);

    const rectGrp3 = svg3
        .append('g')
        .attr('transform', 'translate('+margin3.left+','+margin3.top+')');
    
    // y and x axis
    rectGrp3.append('g').call(d3.axisLeft(yScale3));
    rectGrp3.append('g').call(d3.axisBottom(xScale3).tickFormat(d => d + "%"))
        .attr('transform', 'translate(0,'+height3+')');

    rectGrp3.selectAll('rect').data(online_data)
        .enter()
        .append('rect')
        .attr('y', d => yScale3(d.college))
        .attr('width', d => xScale3(d.value))
        .attr('height', yScale3.bandwidth())
        .attr("fill", "#2a5e8ca0");

