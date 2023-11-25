import 'package:flutter/material.dart';

class createRecipe extends StatefulWidget {
  @override
  _createRecipe createState() => _createRecipe();
}

class _createRecipe extends State<createRecipe> {
  late String title, description, ingredients;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "Create Recipe",
          style: TextStyle(color: Colors.black, fontSize: 25),
        ),
        centerTitle: true,
        backgroundColor: Color.fromARGB(255, 55, 175, 166),
        actions: <Widget>[
          IconButton(
            icon: Icon(
              Icons.file_upload,
              color: Colors.black,
            ),
            onPressed: () {},
          )
        ],
      ),
      body: Container(
          child: Column(
        children: <Widget>[
          SizedBox(
            height: 10,
          ),
          Container(
            margin: EdgeInsets.symmetric(horizontal: 16),
            height: 150,
            decoration: BoxDecoration(
                color: Colors.grey, borderRadius: BorderRadius.circular(6)),
            width: MediaQuery.of(context).size.width,
            child: Icon(
              Icons.add_a_photo,
              color: Colors.black45,
            ),
          ),
          SizedBox(
            height: 8,
          ),
          Container(
            margin: EdgeInsets.symmetric(horizontal: 16),
            child: Column(children: <Widget>[
              TextField(
                decoration: InputDecoration(hintText: "Title"),
                onChanged: (val) {
                  title = val;
                },
              ),
              TextField(
                decoration: InputDecoration(hintText: "Description"),
                onChanged: (val) {
                  description = val;
                },
              ),
              TextField(
                decoration: InputDecoration(hintText: "Ingredients"),
                onChanged: (val) {
                  ingredients = val;
                },
              ),
              TextField(
                decoration: InputDecoration(hintText: "Instructions"),
                onChanged: (val) {
                  description = val;
                },
              ),
            ]),
          )
        ],
      )),
    );
  }
}
