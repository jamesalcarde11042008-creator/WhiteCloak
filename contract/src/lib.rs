#![no_std]
use soroban_sdk::{contract, contractimpl, Address, Env, token};

#[contract]
pub struct EscrowContract;

#[contractimpl]
impl EscrowContract {
    // 1. Client locks USDC into the contract
    pub fn fund(env: Env, client: Address, amount: i128, token_id: Address) {
        client.require_auth();
        let token = token::Client::new(&env, &token_id);
        token.transfer(&client, &env.current_contract_address(), &amount);
    }

    // 2. Client approves work and releases USDC to the freelancer
    pub fn release(env: Env, client: Address, freelancer: Address, amount: i128, token_id: Address) {
        client.require_auth();
        let token = token::Client::new(&env, &token_id);
        token.transfer(&env.current_contract_address(), &freelancer, &amount);
    }
}