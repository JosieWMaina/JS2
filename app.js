let selectedChoice;


const account = {
  accountName: "Helena Johansson",
  balance: 100,
  getBalance: function () {
    alert(`Your current Account balance is $${this.balance}`);
    menu()
  },

  deposit: function () {
    let depositAmount = prompt("How much would you like to deposit?");
    var reg = new RegExp("^[0-9]*$");

    if (
      reg.test(depositAmount) == false ||
      depositAmount.length <= 0 ||
      parseInt(depositAmount) === 0
    ) {
      account.accountError("Entered value is not allowed!");
      this.deposit();
    } else {
      this.balance += parseInt(depositAmount);
      alert(
        `Deposit successfull! Your current balance is $${this.balance}`
      );
      menu();
    }
  },

  withdrawal: function () {
    let withdrawlAmount = prompt("How much would you like to withdraw?");
    var reg = new RegExp("^[0-9]*$");

    if (
      reg.test(withdrawlAmount) == false ||
      withdrawlAmount.length <= 0 ||
      parseInt(withdrawlAmount) === 0 ||
      parseInt(withdrawlAmount) >= this.balance
    ) {
      account.accountError("Entered value is not allowed!");
      this.withdrawal();
    } else {
      this.balance -= parseInt(withdrawlAmount);
      alert(
        `Withdrawal successfull! Your current balance is $${this.balance}`
      );
      menu();
    }
  },

  getAccountName: function () {
    alert(this.accountName);
    menu();
  },
  accountError: (error) => {
    alert(error);
  },
  exitAccount: function () {
    alert("Are you sure you want to exit?");
  },
};

function switchFunc (selectedChoice) {
  switch (parseFloat(selectedChoice)) {
    case 1:
      account.getBalance();
      break;

    case 2:
      account.deposit();
      break;

    case 3:
      account.withdrawal();
      break;

    case 4:
      account.getAccountName();
      break;

    case 5:
      account.exitAccount();
      break;

    default:
    menu();
  }
};


let menu = function () {
  selectedChoice = prompt(
    "Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get Account Name 5.) Exit"
  );
  switchFunc(selectedChoice)
};

menu();