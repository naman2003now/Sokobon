congo = '''   ******    *******   ****     **   ********  *******       **     **********  ********
  **////**  **/////** /**/**   /**  **//////**/**////**     ****   /////**///  **////// 
 **    //  **     //**/**//**  /** **      // /**   /**    **//**      /**    /**       
/**       /**      /**/** //** /**/**         /*******    **  //**     /**    /*********
/**       /**      /**/**  //**/**/**    *****/**///**   **********    /**    ////////**
//**    **//**     ** /**   //****//**  ////**/**  //** /**//////**    /**           /**
 //******  //*******  /**    //*** //******** /**   //**/**     /**    /**     ******** 
  //////    ///////   //      ///   ////////  //     // //      //     //     ////////  '''

congo = congo.replace("*", "B").replace("/", "G").replace(" ", "G")
congo = congo.split("\n")
output = ["G"*88]*40
for line in congo:
    output.append(line)
for i in range(40):
    output.append("G"*88)
print(output)