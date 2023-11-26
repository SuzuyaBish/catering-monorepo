import 'package:catering_mobile/main.dart';

class RecipeFunctions {
  static Future<dynamic> fetchRecipes() async {
    final response = await supabase.from('recipes').select("*");
    return response;
  }
}
