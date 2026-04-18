#![cfg(test)]

use super::*;
use soroban_sdk::{testutils::Address as _, Address, Env, token};

#[test]
fn test_escrow_flow() {
    let env = Env::default();
    env.mock_all_auths();

    // 1. Setup Identities
    let client = Address::generate(&env);
    let freelancer = Address::generate(&env);
    
    // 2. Register the Escrow Contract
    let contract_id = env.register_contract(None, EscrowContract);
    let client_contract = EscrowContractClient::new(&env, &contract_id);

    // 3. Setup a Mock USDC Token
    let token_admin = Address::generate(&env);
    let token_id = env.register_stellar_asset_contract(token_admin);
    let token_client = token::Client::new(&env, &token_id);

    // 4. Mint tokens to the Client ($1000)
    token_client.mint(&client, &1000);
    assert_eq!(token_client.balance(&client), 1000);

    // 5. TEST FUND: Client locks $500 into the contract
    client_contract.fund(&client, &500, &token_id);
    
    // Verify balances after funding
    assert_eq!(token_client.balance(&client), 500);
    assert_eq!(token_client.balance(&contract_id), 500);

    // 6. TEST RELEASE: Client approves and sends $500 to freelancer
    client_contract.release(&client, &freelancer, &500, &token_id);

    // Verify final balances
    assert_eq!(token_client.balance(&contract_id), 0);
    assert_eq!(token_client.balance(&freelancer), 500);
}