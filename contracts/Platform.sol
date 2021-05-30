// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21;

contract Platform {
    struct Manufacturer {
        bytes32 name;
    }

    struct HealthcareP {
        bytes32 name; 
    }

    struct Individual {
        uint nric;
        bytes32 name;
        bool[2] vaccinesReceived;
    }

    uint[] ids;

    mapping (address => Manufacturer) public manufacturers;
    mapping (address => HealthcareP) public healthcarePs;
    mapping (address => Individual) public individuals;
    

    function createManufacturer(bytes32 name) public{
        address id = msg.sender;
        manufacturers[id] = Manufacturer(name);
    }

    function createHealthcareP(bytes32 name) public{
        address id = msg.sender;
        healthcarePs[id] = HealthcareP(name);
    }

    function createIndividual(uint nric, bytes32 name) public{
        address id = msg.sender;
        individuals[id] = Individual(nric, name, [false, false]);
    }

    function checkIdentity() public view returns(bytes32){

    }


  uint storedData;

  function set(uint x) public {
    storedData = x;
  }

  function get() public view returns (uint) {
    return storedData;
  }
}
