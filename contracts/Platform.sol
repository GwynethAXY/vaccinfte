// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21;

contract Platform {
    struct Manufacturer {
        bytes32 name;
        bool isValid;
    }

    struct HealthcareP {
        bytes32 name; 
        bool isValid;
    }

    struct Individual {
        uint nric;
        bytes32 name;
        bool[2] vaccinesReceived;
        bool isValid;
    }

    uint[] ids;

    mapping (address => Manufacturer) public manufacturers;
    mapping (address => HealthcareP) public healthcarePs;
    mapping (address => Individual) public individuals;
    

    function createManufacturer(bytes32 name) public{
        address id = msg.sender;
        manufacturers[id] = Manufacturer(name, true);
    }

    function createHealthcareP(bytes32 name) public{
        address id = msg.sender;
        healthcarePs[id] = HealthcareP(name, true);
    }

    function createIndividual(uint nric, bytes32 name) public{
        address id = msg.sender;
        individuals[id] = Individual(nric, name, [false, false], true); 
    }

    function checkIdentity() public view returns(bytes32){
        if(manufacturers[msg.sender].isValid){
            return bytes32("Manufacturer");
        } else if (healthcarePs[msg.sender].isValid){
            return bytes32("HealthcareP");
        } else if (individuals[msg.sender].isValid){
            return bytes32("Individual");
        }
        return bytes32("New User");
    }


  uint storedData;

  function set(uint x) public {
    storedData = x;
  }

  function get() public view returns (uint) {
    return storedData;
  }
}
