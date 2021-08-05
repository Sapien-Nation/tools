export interface Badge {
  id: string, // id of the Badge on Sapien
  blockchainId: number, // id of the Badge on the blockchain
  name: string, 
  description: string,
  avatar: string, 
  spn: number, // Badge price, no decimals
}