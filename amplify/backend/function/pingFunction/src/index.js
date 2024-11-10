exports.handler = async (event) => {
    const ip = '3.130.208.244'; 
    const icmpSeq = Math.floor(Math.random() * 1000); 
    const ttl = Math.floor(Math.random() * 255); 
    const time = (Math.random() * 100).toFixed(2);

    const pingResponse = `${64} bytes from ${ip}: icmp_seq=${icmpSeq} ttl=${ttl} time=${time} ms`;

    const response = {
        statusCode: 200,
        body: JSON.stringify({ message: pingResponse }),
    };

    return response;
};
