//database

SELECT new_Author('paly', 'John');
SELECT new_Author('heens', 'olly');
SELECT new_Author('lema', 'Alex');

SELECT * FROM Author;



SELECT new_Publisher (
   --AccountName = 
	'Bal and paly Acct',
   --CardNumber  = 
	'583-202-998',
   --AccountType = 
	'Publisher',
   --PublisherName  = 
	'bal' and 'paly Acct',
   --Address   = 
	'123, east London, ON',
   --Email = 
	'123@outlook.com',
   --PhoneNumber = 
	'121-221-2121'
);

SELECT new_Publisher (
   --AccountName = 
	'Violet',
   --CardNumber  = 
	'565-556-2628',
   --AccountType = 
	'Publisher',
   --PublisherName  = 
	'Violet',
   --Address   = 
	'123, Alberta, Canada',
   --Email = 
	'Violet@outlook.com',
   --PhoneNumber = 
	'553-474-8553'
);

--SELECT * FROM Account
--SELECT * FROM Publisher





SELECT new_Book(
   --BookName =
	'Harry Potter',
   --Author_id
    1,
   --ISBN VARCHAR(100),
	'3131-3131-3232K',
   --Genre VARCHAR(255)
	'Mystery',
   --NumberOfPages ,
	440,
   -- Price 
	40,
   --Publisher_id 
	2
);


SELECT new_Book(
   --BookName =
	'Dark Horse 2',
   --Author_id
    1,
   --ISBN VARCHAR(100),
	'522-687-8755OP',
   --Genre VARCHAR(255)
	'Magic',
   --NumberOfPages ,
	442,
   -- Price 
	50.20,
   --Publisher_id 
	2
);


--SELECT * FROM Book

SELECT new_BookUser
 (
   --AccountName =
	 'User 1',
   --CardNumber   =
	 '56896_232-443,',
   --AccountType =
	 'BookBuyer',
   --UserPassword =
	 'ottawa123',
   --UserName =
	 'User1',
   --UserEmail =
	 'user1@gmail.com',
   --ShippingAddress =
	 '123 Path Drive, ottawa, ON',
   --BillingAddress =
	 '123 Path Drive, ottawa, ON',
   --CreditCardInfo = 
	 'VISA'
	 );
	 
	
SELECT new_BookUser
 (
   --AccountName =
	 'User 2',
   --CardNumber   =
	 '7334-1882-23,',
   --AccountType =
	 'BookBuyer',
   --UserPassword =
	 'fun3232',
   --UserName =
	 'User2',
   --UserEmail =
	 'user2@gmail.com',
   --ShippingAddress =
	 '2585 Canotic Drive, chelsea, ON',
   --BillingAddress =
	 '123 First Drive, kingston, ON',
   --CreditCardInfo = 
	 'Mastercard'
	 );
--SELECT * FROM BookUser;



--SELECT new_Order(1)
--SELECT * FROM BookOrder



SELECT new_BookOrderDetail(
--   Order_id =
	1,
--Book_id =
	1,
--   BookUser_id =
	2,
--   Quantity =
	1
);

SELECT new_BookOrderDetail(
--   Order_id =
	1,
--Book_id =
	2,
--   BookUser_id =
	2,
--   Quantity =
	2
)


-- SELECT * FROM bookordercheckoutdetail

SELECT new_BookOrderDetail(
--   Order_id =
	1,
--Book_id =
	2,
--   BookUser_id =
	2,
--   Quantity =
	2
)

SELECT new_BookOrderDetail(
--   Order_id =
	1,
--Book_id =
	1,
--   BookUser_id =
	2,
--   Quantity =
	2
);
SELECT * FROM BookInventory