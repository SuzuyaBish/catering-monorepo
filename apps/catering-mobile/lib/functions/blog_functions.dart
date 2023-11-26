import 'package:catering_mobile/main.dart';

class BlogFunctions {
  static Future<dynamic> fetchBlogs() async {
    final response = await supabase.from('blogs').select("*");
    return response;
  }
}
