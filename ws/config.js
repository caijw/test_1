
const WS_SERVER_PORT = 8081
const CASE_RUN_TIME = 5

const urlParams = new URLSearchParams(window.location.search);
const data_type = urlParams.get('data_type');
let TEST_CASES = []
if (data_type == "all_data") {
  TEST_CASES = [
    {
      length: 100
    },
    {
      length: 150
    },
    {
      length: 200
    },
    {
      length: 250
    },
    {
      length: 300
    },
    {
      length: 350
    },
    {
      length: 400
    },
    {
      length: 450
    },
    {
      length: 500
    },
    {
      length: 550
    },
    {
      length: 600
    },
    {
      length: 650
    },
    {
      length: 700
    },
    {
      length: 750
    },
    {
      length: 800
    },
    {
      length: 850
    },
    {
      length: 900
    },
    {
      length: 950
    },
    {
      length: 1000
    },
    {
      length: 1050
    },
    {
      length: 1100
    },
    {
      length: 1150
    },
    {
      length: 1200
    },
    {
      length: 1250
    },
    {
      length: 1300
    },
    {
      length: 1350
    },
    {
      length: 1400
    },
    {
      length: 1450
    },
    {
      length: 1500
    },
    {
      length: 1550
    },
    {
      length: 1600
    },
    {
      length: 1650
    },
    {
      length: 1700
    },
    {
      length: 1750
    },
    {
      length: 1800
    },
    {
      length: 1850
    },
    {
      length: 1900
    },
    {
      length: 1950
    },
    {
      length: 2000
    },
    {
      length: 3000
    },
    {
      length: 4000
    },
    {
      length: 5000
    },
    {
      length: 6000
    },
    {
      length: 7000
    },
    {
      length: 8000
    },
    {
      length: 9000
    },
    {
      length: 10000
    },
    {
      length: 20000
    },
    {
      length: 30000
    },
    {
      length: 40000
    },
    {
      length: 50000
    },
    {
      length: 60000
    },
    {
      length: 70000
    },
    {
      length: 80000
    },
    {
      length: 90000
    },
    {
      length: 100000
    },
    {
      length: 110000
    },
    {
      length: 120000
    },
    {
      length: 130000
    },
    {
      length: 140000
    },
    {
      length: 150000
    },
    {
      length: 160000
    },
    {
      length: 170000
    },
    {
      length: 180000
    },
    {
      length: 190000
    },
    {
      length: 200000
    },
    {
      length: 1 * 1024 * 1024,
      alias: "1M",
    },
    {
      length: 2 * 1024 * 1024,
      alias: "2M",
    },
    {
      length: 3 * 1024 * 1024,
      alias: "3M",
    },
    {
      length: 4 * 1024 * 1024,
      alias: "4M",
    },
    {
      length: 5 * 1024 * 1024,
      alias: "5M",
    },
    {
      length: 6 * 1024 * 1024,
      alias: "6M",
    },
    {
      length: 7 * 1024 * 1024,
      alias: "7M",
    },
    {
      length: 8 * 1024 * 1024,
      alias: "8M",
    },
    {
      length: 9 * 1024 * 1024,
      alias: "9M",
    },
    {
      length: 10 * 1024 * 1024,
      alias: "10M",
    },
  ]
} else if (data_type == "small_data") {
  TEST_CASES = [
    {
      length: 100
    },
    {
      length: 150
    },
    {
      length: 200
    },
    {
      length: 250
    },
    {
      length: 300
    },
    {
      length: 350
    },
    {
      length: 400
    },
    {
      length: 450
    },
    {
      length: 500
    },
    {
      length: 550
    },
    {
      length: 600
    },
    {
      length: 650
    },
    {
      length: 700
    },
    {
      length: 750
    },
    {
      length: 800
    },
    {
      length: 850
    },
    {
      length: 900
    },
    {
      length: 950
    },
    {
      length: 1000
    },
    {
      length: 1050
    },
    {
      length: 1100
    },
    {
      length: 1150
    },
    {
      length: 1200
    },
    {
      length: 1250
    },
    {
      length: 1300
    },
    {
      length: 1350
    },
    {
      length: 1400
    },
    {
      length: 1450
    },
    {
      length: 1500
    },
    {
      length: 1550
    },
    {
      length: 1600
    },
    {
      length: 1650
    },
    {
      length: 1700
    },
    {
      length: 1750
    },
    {
      length: 1800
    },
    {
      length: 1850
    },
    {
      length: 1900
    },
    {
      length: 1950
    },
    {
      length: 2000
    },
    {
      length: 3000
    },
    {
      length: 4000
    },
    {
      length: 5000
    },
    {
      length: 6000
    },
    {
      length: 7000
    },
    {
      length: 8000
    },
    {
      length: 9000
    },
    {
      length: 10000
    },
    {
      length: 20000
    },
    {
      length: 30000
    },
    {
      length: 40000
    },
    {
      length: 50000
    },
    {
      length: 60000
    },
    {
      length: 70000
    },
    {
      length: 80000
    },
    {
      length: 90000
    },
    {
      length: 100000
    },
    {
      length: 110000
    },
    {
      length: 120000
    },
    {
      length: 130000
    },
    {
      length: 140000
    },
    {
      length: 150000
    },
    {
      length: 160000
    },
    {
      length: 170000
    },
    {
      length: 180000
    },
    {
      length: 190000
    },
    {
      length: 200000
    },
  ]
} else if (data_type == "big_data") {
  TEST_CASES = [
    {
      length: 1 * 1024 * 1024,
      alias: "1M",
    },
    {
      length: 2 * 1024 * 1024,
      alias: "2M",
    },
    {
      length: 3 * 1024 * 1024,
      alias: "3M",
    },
    {
      length: 4 * 1024 * 1024,
      alias: "4M",
    },
    {
      length: 5 * 1024 * 1024,
      alias: "5M",
    },
    {
      length: 6 * 1024 * 1024,
      alias: "6M",
    },
    {
      length: 7 * 1024 * 1024,
      alias: "7M",
    },
    {
      length: 8 * 1024 * 1024,
      alias: "8M",
    },
    {
      length: 9 * 1024 * 1024,
      alias: "9M",
    },
    {
      length: 10 * 1024 * 1024,
      alias: "10M",
    },
  ]
}



module.exports = {
  WS_SERVER_PORT,
  TEST_CASES,
  CASE_RUN_TIME,
}