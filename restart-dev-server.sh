pid=$(lsof -ti tcp:9000)
echo $pid
if [[ $pid ]]; then
  kill -9 $pid
fi
npm run dev
