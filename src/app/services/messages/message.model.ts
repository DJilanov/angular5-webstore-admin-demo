export class MessageModel {
	Id: string;
	CurrentStep: string;
	FirstName: string;
	LastName: string;
	Title: string;
	Email: string;
	Town: string;
	PostCode: string;
	HouseNumber: string;
	SupplyStartDate: Date;
	SignedInDate: Date;
	Source: string;
	EnergyType: string;
	ElOperatorNumber: string;
	GasOperatorNumber: string;
	CurrentSupplier: string;
	PricePerKWh: string;
	MonthlyPayment: string;
	MonthlyCharge: string;
	TariffName: string;
	MeterPointNumber: number;
	CustomerID: string;
	YearlyUsage: number;
	WishStartSupplyDate: Date;
	MovingInDate: Date;
	CurrentContactCancelDate: Date;
	PhoneNumber: string;
	InvoiceAddress: string;
	

	constructor(
		id?: string,
		currentStep?: string,
		firstName?: string,
		lastName?: string,
		title?: string,
		email?: string,
		town?: string,
		postCode?: string,
		houseNumber?: string,
		supplyStartDate?: Date,
		signedInDate?: Date,
		source?: string,
		energyType?: string,
		elOperatorNumber?: string,
		gasOperatorNumber?: string,
		currentSupplier?: string,
		pricePerKWh?: string,
		monthlyPayment?: string,
		tariffName?: string,
		meterPointNumber?: number,
		customerID?: string,
		yearlyUsage?: number,
		wishStartSupplyDate?: Date,
		movingInDate?: Date,
		currentContactCancelDate?: Date,
		phoneNumber?: string,
		invoiceAddress?: string,
	) {
		this.Id = id;
		this.CurrentStep = currentStep;
		this.FirstName = firstName;
		this.LastName = lastName;
		this.Title = title;
		this.Email = email;
		this.Town = town;
		this.PostCode = postCode;
		this.HouseNumber = houseNumber;
		this.SupplyStartDate = supplyStartDate;
		this.SignedInDate = signedInDate;
		this.Source = source;
		this.EnergyType = energyType;
		this.ElOperatorNumber = elOperatorNumber;
		this.GasOperatorNumber = gasOperatorNumber;
		this.CurrentSupplier = currentSupplier;
		this.PricePerKWh = pricePerKWh;
		this.MonthlyPayment = monthlyPayment;
		this.TariffName = tariffName;
		this.MeterPointNumber = meterPointNumber;
		this.CustomerID = customerID;
		this.YearlyUsage = yearlyUsage;
		this.WishStartSupplyDate = wishStartSupplyDate;
		this.MovingInDate = movingInDate;
		this.CurrentContactCancelDate = currentContactCancelDate;
		this.PhoneNumber = phoneNumber;
		this.InvoiceAddress = invoiceAddress;
	}
}
