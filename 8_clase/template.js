const socket = require('socket.io-client')

module.exports = `<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<script>
	const io = ${socket}
</script>
</body>
</html>`