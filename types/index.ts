// Enums
export enum Role {
    USER = 'USER',
    ADMIN = 'ADMIN',
  }
  
  export enum PaymentMethod {
    QRIS = 'QRIS',
    BANK_TRANSFER = 'BANK_TRANSFER',
  }
  
  // Types
  export type User = {
    username: string;
    password: string;
    role: Role;
  };
  
  export type InvoiceHistory = {
    bill: number;
    created_at: Date;
  };
  
  export type Payment = {
    total_bill: number;
    payment_method: PaymentMethod;
    rent_periods: number; // 3 or 6 (months)
  };
  
  export type DamageReporting = {
    user: User;
    message: string;
  };
  
  export type UserReport = {
    message: string;
  };
  
  export type RoomOccupancy = {
    empty: number;
    filled: number;
  };
  
  export type UserDetail = {
    user: User;
    invoice_history: InvoiceHistory;
  };
  