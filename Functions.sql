//Functions

CREATE OR REPLACE FUNCTION new_Author(AuthorfirstName varchar(255), AuthorLastName varchar(255))
  RETURNS integer AS
$BODY$
DECLARE
   v_id integer;
BEGIN
--Inserts a new author
   INSERT INTO Author(AuthorfirstName, AuthorLastName)
   VALUES (AuthorfirstName, AuthorLastName)
   RETURNING Author_id INTO v_id
   
   -- Return the new id and use in a select clause
    RETURN v_id;
END;
$BODY$
  LANGUAGE plpgsql;

 
 CREATE OR REPLACE FUNCTION new_Publisher
 (
   AccountName  VARCHAR(255),
   CardNumber   VARCHAR(255),
   AccountType VARCHAR (20),
  
   PublisherName  VARCHAR(255),
   Address   VARCHAR(255),
   Email VARCHAR (100),
   PhoneNumber VARCHAR (255)
 )
  RETURNS integer AS
$BODY$
  
  
  CREATE OR REPLACE FUNCTION new_Book(
   BookName  VARCHAR(255),
   Author_id INT,
   ISBN VARCHAR(100),
   Genre VARCHAR(255),
   NumberOfPages INT,
   Price NUMERIC(5,2),
   Publisher_id INT
)

CREATE OR REPLACE FUNCTION new_BookUser
 (
   AccountName  VARCHAR(255),
   CardNumber   VARCHAR(255),
   AccountType VARCHAR (20),
  
   UserPassword VARCHAR(255),
   UserName VARCHAR(255),
   UserEmail VARCHAR(255),
   ShippingAddress VARCHAR(255),
   BillingAddress VARCHAR(255),
   CreditCardInfo VARCHAR(255)
 )
   v_account_id integer;
   v_bookuser_id integer;
BEGIN
   -- Inserts the new Account record and retrieves the last inserted id
   INSERT INTO Account(AccountName, CardNumber, AccountType)
   VALUES (AccountName, CardNumber, AccountType)
   
   -- Inserts the new Publisher record and retrieves the last inserted id
   INSERT INTO BookUser(account_id, userpassword, username, useremail, shippingaddress, billingaddress, creditcardinfo)
   VALUES (v_account_id, userpassword, username, useremail, shippingaddress, billingaddress, creditcardinfo)
   
  
  
 CREATE OR REPLACE FUNCTION new_Order( BookUser_id INT)
  RETURNS integer AS
$BODY$
DECLARE
   v_id integer;
BEGIN
   -- Inserts the new Order record and retrieves the last inserted id
   INSERT INTO Bookorder(BookUser_id)
   VALUES (BookUser_id)
   

