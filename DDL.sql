//DDL TABLES Yasin Jaamac 101070748
CREATE TABLE Author(
   Author_id INT GENERATED ALWAYS AS IDENTITY,
   AuthorfirstName  VARCHAR(255),
   AuthorLastName   VARCHAR(255),
   PRIMARY KEY(Author_id)  
);




CREATE TABLE Account(
   Account_id INT GENERATED ALWAYS AS IDENTITY,
   AccountName  VARCHAR(255),
   CardNumber   VARCHAR(255),
   AccountType VARCHAR (20),
   PRIMARY KEY(Account_id)  
);



CREATE TABLE Publisher(
   Publisher_id INT GENERATED ALWAYS AS IDENTITY,
   PublisherName  VARCHAR(255),
   Address   VARCHAR(255),
   Email VARCHAR (100),
   PhoneNumber VARCHAR (255),
   BankAccountNumber INT ,
   PRIMARY KEY(Publisher_id),
   CONSTRAINT fk_Account
   FOREIGN KEY (BankAccountNumber)
   REFERENCES Account(Account_id)
   CONSTRAINT fk_Publisher
   FOREIGN KEY (PublisherAccountId)
   REFERENCES Publisher(publisher_id)

);



CREATE TABLE Book (
   Book_id INT GENERATED ALWAYS AS IDENTITY,
   BookName  VARCHAR(255),
   Author_id INT,
   ISBN INT,
   Genre VARCHAR(255),
   NumberOfPages INT,
   Price NUMERIC(5,2),
   Publisher_id INT,
   PRIMARY KEY(Book_id),
   CONSTRAINT fk_Publisher_id
   FOREIGN KEY (Publisher_id)
   REFERENCES Publisher(Publisher_id) 
);



CREATE TABLE BookUser(
   BookUser_id INT GENERATED ALWAYS AS IDENTITY,
   Account_id INT,
   UserPassword VARCHAR(255),
   UserName VARCHAR(255) ,
   UserEmail VARCHAR(255),
   ShippingAddress VARCHAR(255),
   BillingAddress VARCHAR(255),
   CreditCardInfo VARCHAR(255),
   PRIMARY KEY(BookUser_id),
   CONSTRAINT fk_Account
   FOREIGN KEY (Account_id)
   REFERENCES Account(Account_id)
);

  CREATE TABLE Bookorder(
   Order_id INT GENERATED ALWAYS AS IDENTITY,
   BookUser_id INT,
  
    PRIMARY KEY(Order_id),
    CONSTRAINT fk_BookUser_id
   FOREIGN KEY (BookUser_id)
   REFERENCES BookUser(BookUser_id)
	  
 )


CREATE TABLE BookInventory(

   Inventory_id INT GENERATED ALWAYS AS IDENTITY,
   Book_id INT,
   BooksAdded INT,
   BookSold INT,
   InventoryDate TIMESTAMP(6),

   PRIMARY KEY(Inventory_id),

   CONSTRAINT fk_Book_id
   FOREIGN KEY (Book_id)
   REFERENCES Book(Book_id)
);

CREATE TABLE BookorderCheckoutDetail(

   OrderDetail_id INT GENERATED ALWAYS AS IDENTITY,
   Order_id INT,
   BookUser_id INT,
   Quantity INT,
   PRIMARY KEY(OrderDetail_id),
    
   CONSTRAINT fk_BookUser_id
   FOREIGN KEY (BookUser_id)
   REFERENCES BookUser(BookUser_id),

   CONSTRAINT fk_Order_id
   FOREIGN KEY (Order_id)
   REFERENCES Bookorder(Order_id)
);

CREATE TABLE OrderTracking(
   Order_id INT ,
   Tracking_id INT,
   TrackingUrl VARCHAR (255),
	
	CONSTRAINT fk_Order_id
   FOREIGN KEY (Order_id)
   REFERENCES Bookorder(Order_id)
	
)


CREATE TABLE PublisherMarkupPercent(
   PublisherMarkUp_id INT GENERATED ALWAYS AS IDENTITY,
   Publisher_id INT, 
   Book_id INT,
   MarkupPercentage NUMERIC(5,2),
    PRIMARY KEY(Publisher_id,Book_id),
   CONSTRAINT fk_Publisher_id
   FOREIGN KEY (Publisher_id)
   REFERENCES Publisher(Publisher_id),
	
   
   CONSTRAINT fk_Book_id
   FOREIGN KEY (Book_id)
   REFERENCES Book(Book_id)
 )

CREATE TABLE PublisherMarkup(
  PublisherPercent_id INT GENERATED ALWAYS AS IDENTITY,
   Publisher_id INT,
   Book_id INT,
   NumberOfBookSold INT,
    PRIMARY KEY(Publisher_id,Book_id),
   CONSTRAINT fk_Book_id
   FOREIGN KEY (Book_id)
   REFERENCES Book(Book_id),
   
   CONSTRAINT fk_Publisher_id
   FOREIGN KEY (Publisher_id)
   REFERENCES Publisher(Publisher_id)
 )
