
const WS_SERVER_PORT = 8081
const MIN = 0;
// const MAX = 10 * 1024 * 1024;
const MAX = 200000;
const STRING_TEST_CASES = [
  {
    type: "string",
    length: 100
  },
  {
    type: "string",
    length: 150
  },
  {
    type: "string",
    length: 200
  },
  {
    type: "string",
    length: 250
  },
  {
    type: "string",
    length: 300
  },
  {
    type: "string",
    length: 350
  },
  {
    type: "string",
    length: 400
  },
  {
    type: "string",
    length: 450
  },
  {
    type: "string",
    length: 500
  },
  {
    type: "string",
    length: 550
  },
  {
    type: "string",
    length: 600
  },
  {
    type: "string",
    length: 650
  },
  {
    type: "string",
    length: 700
  },
  {
    type: "string",
    length: 750
  },
  {
    type: "string",
    length: 800
  },
  {
    type: "string",
    length: 850
  },
  {
    type: "string",
    length: 900
  },
  {
    type: "string",
    length: 950
  },
  {
    type: "string",
    length: 1000
  },
  {
    type: "string",
    length: 1050
  },
  {
    type: "string",
    length: 1100
  },
  {
    type: "string",
    length: 1150
  },
  {
    type: "string",
    length: 1200
  },
  {
    type: "string",
    length: 1250
  },
  {
    type: "string",
    length: 1300
  },
  {
    type: "string",
    length: 1350
  },
  {
    type: "string",
    length: 1400
  },
  {
    type: "string",
    length: 1450
  },
  {
    type: "string",
    length: 1500
  },
  {
    type: "string",
    length: 1550
  },
  {
    type: "string",
    length: 1600
  },
  {
    type: "string",
    length: 1650
  },
  {
    type: "string",
    length: 1700
  },
  {
    type: "string",
    length: 1750
  },
  {
    type: "string",
    length: 1800
  },
  {
    type: "string",
    length: 1850
  },
  {
    type: "string",
    length: 1900
  },
  {
    type: "string",
    length: 1950
  },
  {
    type: "string",
    length: 2000
  },
  {
    type: "string",
    length: 3000
  },
  {
    type: "string",
    length: 4000
  },
  {
    type: "string",
    length: 5000
  },
  {
    type: "string",
    length: 6000
  },
  {
    type: "string",
    length: 7000
  },
  {
    type: "string",
    length: 8000
  },
  {
    type: "string",
    length: 9000
  },
  {
    type: "string",
    length: 10000
  },
  {
    type: "string",
    length: 20000
  },
  {
    type: "string",
    length: 30000
  },
  {
    type: "string",
    length: 40000
  },
  {
    type: "string",
    length: 50000
  },
  {
    type: "string",
    length: 60000
  },
  {
    type: "string",
    length: 70000
  },
  {
    type: "string",
    length: 80000
  },
  {
    type: "string",
    length: 90000
  },
  {
    type: "string",
    length: 100000
  },
  {
    type: "string",
    length: 110000
  },
  {
    type: "string",
    length: 120000
  },
  {
    type: "string",
    length: 130000
  },
  {
    type: "string",
    length: 140000
  },
  {
    type: "string",
    length: 150000
  },
  {
    type: "string",
    length: 160000
  },
  {
    type: "string",
    length: 170000
  },
  {
    type: "string",
    length: 180000
  },
  {
    type: "string",
    length: 190000
  },
  {
    type: "string",
    length: 200000
  },
  {
    type: "string",
    length: 1 * 1024 * 1024
  },
  {
    type: "string",
    length: 2 * 1024 * 1024
  },
  {
    type: "string",
    length: 3 * 1024 * 1024
  },
  {
    type: "string",
    length: 4 * 1024 * 1024
  },
  {
    type: "string",
    length: 5 * 1024 * 1024
  },
  {
    type: "string",
    length: 6 * 1024 * 1024
  },
  {
    type: "string",
    length: 7 * 1024 * 1024
  },
  {
    type: "string",
    length: 8 * 1024 * 1024
  },
  {
    type: "string",
    length: 9 * 1024 * 1024
  },
  {
    type: "string",
    length: 10 * 1024 * 1024
  },
]

const ARRAYBUFFER_TEST_CASES = [
  {
    type: "arraybuffer",
    length: 100
  },
  {
    type: "arraybuffer",
    length: 150
  },
  {
    type: "arraybuffer",
    length: 200
  },
  {
    type: "arraybuffer",
    length: 250
  },
  {
    type: "arraybuffer",
    length: 300
  },
  {
    type: "arraybuffer",
    length: 350
  },
  {
    type: "arraybuffer",
    length: 400
  },
  {
    type: "arraybuffer",
    length: 450
  },
  {
    type: "arraybuffer",
    length: 500
  },
  {
    type: "arraybuffer",
    length: 550
  },
  {
    type: "arraybuffer",
    length: 600
  },
  {
    type: "arraybuffer",
    length: 650
  },
  {
    type: "arraybuffer",
    length: 700
  },
  {
    type: "arraybuffer",
    length: 750
  },
  {
    type: "arraybuffer",
    length: 800
  },
  {
    type: "arraybuffer",
    length: 850
  },
  {
    type: "arraybuffer",
    length: 900
  },
  {
    type: "arraybuffer",
    length: 950
  },
  {
    type: "arraybuffer",
    length: 1000
  },
  {
    type: "arraybuffer",
    length: 1050
  },
  {
    type: "arraybuffer",
    length: 1100
  },
  {
    type: "arraybuffer",
    length: 1150
  },
  {
    type: "arraybuffer",
    length: 1200
  },
  {
    type: "arraybuffer",
    length: 1250
  },
  {
    type: "arraybuffer",
    length: 1300
  },
  {
    type: "arraybuffer",
    length: 1350
  },
  {
    type: "arraybuffer",
    length: 1400
  },
  {
    type: "arraybuffer",
    length: 1450
  },
  {
    type: "arraybuffer",
    length: 1500
  },
  {
    type: "arraybuffer",
    length: 1550
  },
  {
    type: "arraybuffer",
    length: 1600
  },
  {
    type: "arraybuffer",
    length: 1650
  },
  {
    type: "arraybuffer",
    length: 1700
  },
  {
    type: "arraybuffer",
    length: 1750
  },
  {
    type: "arraybuffer",
    length: 1800
  },
  {
    type: "arraybuffer",
    length: 1850
  },
  {
    type: "arraybuffer",
    length: 1900
  },
  {
    type: "arraybuffer",
    length: 1950
  },
  {
    type: "arraybuffer",
    length: 2000
  },
  {
    type: "arraybuffer",
    length: 3000
  },
  {
    type: "arraybuffer",
    length: 4000
  },
  {
    type: "arraybuffer",
    length: 5000
  },
  {
    type: "arraybuffer",
    length: 6000
  },
  {
    type: "arraybuffer",
    length: 7000
  },
  {
    type: "arraybuffer",
    length: 8000
  },
  {
    type: "arraybuffer",
    length: 9000
  },
  {
    type: "arraybuffer",
    length: 10000
  },
  {
    type: "arraybuffer",
    length: 20000
  },
  {
    type: "arraybuffer",
    length: 30000
  },
  {
    type: "arraybuffer",
    length: 40000
  },
  {
    type: "arraybuffer",
    length: 50000
  },
  {
    type: "arraybuffer",
    length: 60000
  },
  {
    type: "arraybuffer",
    length: 70000
  },
  {
    type: "arraybuffer",
    length: 80000
  },
  {
    type: "arraybuffer",
    length: 90000
  },
  {
    type: "arraybuffer",
    length: 100000
  },
  {
    type: "arraybuffer",
    length: 110000
  },
  {
    type: "arraybuffer",
    length: 120000
  },
  {
    type: "arraybuffer",
    length: 130000
  },
  {
    type: "arraybuffer",
    length: 140000
  },
  {
    type: "arraybuffer",
    length: 150000
  },
  {
    type: "arraybuffer",
    length: 160000
  },
  {
    type: "arraybuffer",
    length: 170000
  },
  {
    type: "arraybuffer",
    length: 180000
  },
  {
    type: "arraybuffer",
    length: 190000
  },
  {
    type: "arraybuffer",
    length: 200000
  },
  {
    type: "arraybuffer",
    length: 1 * 1024 * 1024
  },
  {
    type: "arraybuffer",
    length: 2 * 1024 * 1024
  },
  {
    type: "arraybuffer",
    length: 3 * 1024 * 1024
  },
  {
    type: "arraybuffer",
    length: 4 * 1024 * 1024
  },
  {
    type: "arraybuffer",
    length: 5 * 1024 * 1024
  },
  {
    type: "arraybuffer",
    length: 6 * 1024 * 1024
  },
  {
    type: "arraybuffer",
    length: 7 * 1024 * 1024
  },
  {
    type: "arraybuffer",
    length: 8 * 1024 * 1024
  },
  {
    type: "arraybuffer",
    length: 9 * 1024 * 1024
  },
  {
    type: "arraybuffer",
    length: 10 * 1024 * 1024
  },
]

module.exports = {
  WS_SERVER_PORT,
  STRING_TEST_CASES,
  ARRAYBUFFER_TEST_CASES,
  MIN,
  MAX
}