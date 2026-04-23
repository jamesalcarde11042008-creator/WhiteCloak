# TrustlessWork 

TrustlessWork is a decentralized escrow platform built on the Stellar network using Soroban smart contracts. It provides a secure, transparent, and trustless environment for freelance payments.

## 🚀 The Problem
Traditional freelance platforms often take high fees and rely on centralized dispute resolution systems. Direct payments between clients and freelancers carry significant risks:
- **For Clients:** Risk of paying for work that is never delivered or is of poor quality.
- **For Freelancers:** Risk of completing work but not receiving payment.

## ✨ The Solution
TrustlessWork eliminates these risks by using **blockchain-based escrow contracts**. Funds are held securely in a neutral smart contract and are only released to the freelancer once the client approves the completed work or milestones.

## 🛠️ How It Works
1.  **Job Creation:** A client creates a job, specifying the freelancer's address, total payment amount, and specific milestones.
2.  **Escrow Funding:** The client deposits the total amount (in XLM or other supported tokens) into the smart contract escrow.
3.  **Secure Work Phase:** The freelancer can see that the funds are safely locked in the contract and begins working.
4.  **Milestone Approval:** As work is completed, the client approves milestones.
5.  **Automated Payment:** Upon approval, the smart contract automatically releases the corresponding funds from the escrow directly to the freelancer's wallet.
6.  **Dispute Resolution:** In case of disagreement, a dispute can be flagged for review.

## 💻 Tech Stack
-   **Frontend:** React.js (modern UI with dark mode support)
-   **Smart Contract:** Rust / Soroban SDK
-   **Blockchain:** Stellar Network
-   **Wallet Integration:** Freighter API
-   **Contract Client:** Auto-generated TypeScript bindings

## 🌐 Deployment
The smart contract is currently deployed on the **Stellar Testnet**:

- **Escrow Contract ID:** `CAUX56NFO67OWPTC5E3N5SDRPXUQYDQJPHVLNB55PFMO5UKBGX26P6GM`
- **Testnet XLM Token ID:** `CDMLFMKMMD7MWZP3FKUBZPVHTUEDLSX4BYGYKH4GCESXYHS3IHQ4EIG4`
- **Network:** Testnet
- **RPC URL:** `https://soroban-testnet.stellar.org`

---

## ⚙️ Basic Setup

### Prerequisites
- Node.js & npm
- Rust & Soroban CLI
- Freighter Wallet (browser extension)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/WhiteCloak.git
   cd WhiteCloak
   ```
2. Install dependencies:
   ```bash
   # Root
   npm install
   
   # Frontend
   cd whitecloak-frontend
   npm install
   ```

### Running the App
1. Start the frontend:
   ```bash
   cd whitecloak-frontend
   npm start
   ```
2. Ensure your Freighter wallet is set to **Testnet**.

---

## 📝 About
**TrustlessWork** is a decentralized escrow platform on the Stellar network that secures freelance payments through Soroban smart contracts, ensuring safe and transparent transactions between clients and freelancers.
