   // DATA
   const f2f_data = [
    {college: "Nursing", value: 50.46, rank: 1},
    {college: "Pharmacy", value: 47.76, rank: 2},
    {college: "Geosciences", value: 34.194, rank: 3},
    {college: "Education", value: 23.38, rank: 4},
    {college: "LBJ", value: 20.18, rank: 5},
    {college: "Fine Arts", value: 19.74, rank: 6},
    {college: "Liberal Arts", value: 15.46, rank: 7},
    {college: "Cockrell", value: 15.43, rank: 8},
    {college: "Moody", value: 14.31, rank: 9},
    {college: "Natural Sciences", value: 12.51, rank: 10},
    {college: "Law", value: 9.28, rank: 11},
    {college: "McCombs", value: 8.87, rank: 12},
    {college: "Undergraduate Studies", value: 6.87, rank: 13},
    {college: "Social Work", value: 3.85, rank: 14},
    {college: "Architecture", value: 0.64, rank: 15}
    ];

    // D3
    // create svg, give height and width, set margin
    var svg = d3.select("body")
        .append("svg")
        .attr("height", 500)
        .attr("width", 800)
        .attr("id", "F2F_chart")
        .attr("class", "dNone");

    const margin = {top:20, right:20, bottom:20, left:120};

    const width = +svg
        .attr("width") - margin.left - margin.right;

    const height = +svg
        .attr("height") - margin.top - margin.bottom;

    // create scales
    const xScale = d3.scaleLinear()
        .domain([0, d3.max(f2f_data, (function(d){return d.value}))])
        .range([0, width]);
    
    const yScale = d3.scaleBand()
        .domain(f2f_data.map(function(d){return d.college}))
        .range([0, height])
        .padding(0.15);

    const rectGrp = svg
        .append('g')
        .attr('transform', 'translate('+margin.left+','+margin.top+')');
    
    // y and x axis
    rectGrp.append('g').call(d3.axisLeft(yScale));
    rectGrp.append('g').call(d3.axisBottom(xScale).tickFormat(d => d + "%"))
        .attr('transform', 'translate(0,'+height+')');

    rectGrp.selectAll('rect').data(f2f_data)
        .enter()
        .append('rect')
        .attr('y', d => yScale(d.college))
        .attr('width', d => xScale(d.value))
        .attr('height', yScale.bandwidth())
        .attr("fill", "#f5842eb2");
